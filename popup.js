// 获取DOM元素
const urlInput = document.getElementById("url");
const tokenInput = document.getElementById("token");
const workspaceInput = document.getElementById("workspace");
const folderInput = document.getElementById("folder");
const saveButton = document.getElementById("save");

// 加载现有配置
chrome.storage.sync.get(["obsidianConfig"], (result) => {
    const config = result.obsidianConfig || {};
    urlInput.value = config.url || "";
    tokenInput.value = config.token || "";
    workspaceInput.value = config.workspace || "";
    folderInput.value = config.folder || "";
});

// 监听保存按钮点击事件
saveButton.addEventListener("click", () => {
    const config = {
        url: urlInput.value,
        token: tokenInput.value,
        workspace: workspaceInput.value,
        folder: folderInput.value
    };

    // 保存配置到Chrome存储中
    chrome.storage.sync.set({ obsidianConfig: config }, () => {
        console.log("Obsidian配置已保存");
        // 可选择在这里显示保存成功的消息给用户
    });
});
