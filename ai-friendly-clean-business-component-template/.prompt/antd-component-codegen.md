# Antd Business Component Code Generation Prompt

## 技术栈要求
- React 18+
- TailwindCSS
- Ant Design (antd)
- TypeScript

## 组件设计原则
1. 前后端状态分离
   - 所有需要请求服务端数据的操作，都通过 props 暴露给外部页面
   - 组件内部只维护 UI 状态
   - 数据获取、提交等操作通过 props 回调函数实现

2. 文件结构规范
```
ComponentName/
├── index.tsx                 # 组件主入口
├── ComponentName.tsx         # 组件实现
├── ComponentName.types.ts    # 类型定义
├── ComponentName.stories.tsx # Storybook 文档
├── ComponentName.test.tsx    # 单元测试
└── styles.module.css         # 样式文件（如果需要）
```

3. 代码规范
   - 使用 TypeScript 类型定义
   - 使用函数式组件和 React Hooks
   - 遵循 React 最佳实践
   - 使用 TailwindCSS 进行样式管理
   - 组件 props 必须包含完整的类型定义
   - 关键函数和复杂逻辑需要添加注释说明

## 提示词模板

请根据以下模板生成业务组件代码：

```markdown
请帮我生成一个 [组件名称] 组件，该组件的主要功能是 [功能描述]。

### 组件需求
[详细描述组件的具体需求，包括：
- 组件的具体功能
- 用户交互流程
- 需要展示的数据字段
- 特殊的状态处理
- 其他具体要求]

### 组件 Props 设计
请设计以下 props 接口：
- 数据相关 props（需要从父组件传入的数据）
- 回调函数 props（需要父组件处理的操作）
- 配置项 props（组件的可配置项）

### 组件状态设计
请说明组件内部需要维护的状态：
- UI 状态（如：展开/收起、选中状态等）
- 表单状态（如果有）
- 其他内部状态

### 其他要求
[其他特殊要求，如：
- 性能优化考虑
- 可访问性要求
- 国际化支持
- 主题定制
- 其他注意事项]
```

## 生成代码要求

1. 组件实现
   - 使用函数式组件
   - 使用 TypeScript 类型定义
   - 使用 React Hooks 管理状态
   - 使用 TailwindCSS 实现样式
   - 使用 antd 组件库
   - 实现错误处理和加载状态
   - 添加必要的注释说明

2. 类型定义
   - 为所有 props 定义清晰的类型
   - 为组件内部状态定义类型
   - 为回调函数定义类型
   - 导出必要的类型定义

3. Storybook 文档
   - 包含组件的基本说明
   - 展示不同状态的组件
   - 提供 props 使用示例
   - 添加必要的使用说明

4. 单元测试
   - 测试组件渲染
   - 测试用户交互
   - 测试 props 变化
   - 测试边界情况

## 示例输出

请按照以下格式生成代码：

1. 首先生成类型定义文件
2. 然后生成组件实现文件
3. 接着生成 Storybook 文档
4. 最后生成单元测试文件

每个文件都应该包含完整的代码实现，并遵循上述规范要求。
