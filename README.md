# YeCustomElement
一个简单的自定义元素组件库，element-ui的风格。

## 安装
```bash
npm install --save ye-custom-element
```

## 引入

### Vue3
```js
import 'ye-custom-element';
import 'ye-custom-element/style.css';
```

## 示例

### Vue3
```html
<el-button label="按钮"></el-button>
```

以下是用 Markdown 格式编写的贡献指南：

---

## 贡献指南

非常感谢你对本项目感兴趣并愿意贡献！以下是贡献的步骤指南：

### 准备工作

1. **检查问题列表**：在 GitHub 上的 [Issues](链接到项目的 Issues 页面) 页面查看是否有你感兴趣的问题。如果没有，你可以创建一个新的 Issue 来讨论你的想法。
2. **Fork 项目**：点击项目页面右上角的 `Fork` 按钮，将项目仓库 Fork 到你的 GitHub 账号下。
3. **克隆仓库**：将 Fork 后的仓库克隆到你的本地机器。
    
    ```bash
    git clone https://github.com/你的用户名/项目名.git
    cd 项目名
    ```
4. **设置上游仓库**：添加原项目仓库为上游仓库，以便后续同步更新。
    
    ```bash
    git remote add upstream https://github.com/原项目用户名/项目名.git
    ```

### 贡献步骤

1. **同步更新**：在开始新的工作之前，确保你的仓库是最新的。
    
    ```bash
    git fetch upstream
    git checkout main
    git merge upstream/main
    ```
2. **创建分支**：在本地创建一个新的分支来进行你的开发工作。
    ```bash
    git checkout -b feature-分支名
    ```
3. **进行开发**：在新分支上进行你的开发工作。请确保代码遵循项目的编码规范和风格。
4. **提交修改**：将你的修改提交到本地仓库。
    ```bash
    git add .
    git commit -m "描述清晰的提交信息"
    ```
5. **推送分支**：将你的分支推送到你的 GitHub 仓库。
    ```bash
    git push origin feature-分支名
    ```
6. **创建 Pull Request**：在 GitHub 上导航到你的仓库，点击 `Compare & pull request` 按钮，填写相关信息后创建一个 Pull Request。

### 贡献规范

- **提交信息**：提交信息应清晰、简洁，并描述所做的更改。
- **代码风格**：请遵循项目的代码风格指南（如果有的话）。
- **测试**：确保你的更改通过了所有现有的测试，并添加相应的测试用例以覆盖你的修改。

### 交流

如果在贡献过程中有任何疑问或需要帮助，请在项目的 [Discussions](链接到项目的 Discussions 页面) 页面提问，或直接在相关的 Issue 下留言。

---

非常感谢你的贡献！我们期待你的参与并共同改进这个项目。
