# Send to Obsidian

[[中文](./README_zh_cn.md)]

This is a Chrome extension that allows you to send selected text from web pages to the Obsidian note-taking app. With this extension, you can directly save content from web pages to your Obsidian notes for better organization and management of information.

## Features

- **Send Selected Text to Obsidian**: Select text on a web page, then right-click and choose the "Send to Obsidian" option. The selected text will be converted to Markdown format and sent to Obsidian.
- **Configure Obsidian Information**: In the extension popup, you can configure the URL, Token, workspace, and folder path of Obsidian, so that selected text can be saved to specific locations.
- **Support HTML to Markdown**: The extension will convert the selected HTML text to Markdown format to ensure that content is stored in Obsidian in a clean and readable way.

## Usage

1. **Install the Extension**: Install the "Send to Obsidian" extension from the Chrome Web Store.
2. **Configure Obsidian**: Click on the extension icon to open the popup. In the popup, input the URL, Token, workspace, and folder path of Obsidian. These configuration details will be used to send text to Obsidian.
3. **Select Text on Web Page**: Use your mouse to select the text you want to save to Obsidian.
4. **Right-click on Text**: Right-click on the selected text and choose the "Send to Obsidian" menu item.
5. **Wait for Sending to Complete**: The extension will convert the selected text to Markdown format and send it to Obsidian. You can check the sending status through console logs.

## Configuration

Configure the following information in the popup:

- **URL**: The API URL of Obsidian.
- **Token**: The Token used for authorization.
- **Workspace**: The workspace where you want to send the text.
- **Folder Path**: The folder path where you want to save the text.

Make sure to input the configuration information correctly and have sufficient permissions to access the Obsidian API.

## Notes

- **Security**: Ensure the Token is kept confidential and input correct information in the configuration popup.
- **Permissions**: The extension may require access to web page and network permissions to send data to Obsidian.

## Feedback and Support

If you encounter any issues or have any suggestions while using the extension, please contact us through the feedback button on the extension page.

## License

This project is licensed under the [MIT License](LICENSE).
