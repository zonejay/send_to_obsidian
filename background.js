console.log('Background script loaded')
// 在扩展初始化时创建右键菜单项
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'sendToObsidian',
    title: '发送到Obsidian',
    contexts: ['selection']
  })
})

// 监听右键菜单项的点击事件
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'sendToObsidian') {
    // 获取所选文本
    const selectedText = info.selectionText

    // 从Chrome存储中获取Obsidian配置
    chrome.storage.sync.get('obsidianConfig', (result) => {
      const config = result.obsidianConfig
      if (config) {
        // 获取URL、token、workspace和folder
        const {url, token, workspace, folder} = config

        const title = selectedText.trim().slice(0,10) + '.md'
        // 构造请求URL
        const apiUrl = `${url}/vault/${folder}/${title}` // 根据Obsidian API文档构造请求URL

        // 构造请求头部
        const headers = {
          'Content-Type': 'text/plain',
          Authorization: `Bearer ${token}` // 使用token作为授权头部
        }

        // 发送请求
        fetch(apiUrl, {
          method: 'POST',
          headers,
          body: selectedText
        })
          .then((response) => {
            if (response.ok) {
              console.log('发送到Obsidian成功')
            } else {
              console.error('发送到Obsidian失败', response.statusText)
            }
          })
          .catch((error) => {
            console.error('发送请求时出错', error)
          })
      } else {
        console.error('未找到Obsidian配置')
      }
    })
  }
})
