# LangGPT 提示词生成器使用指南

## 概述

LangGPT 提示词生成器是一个专门用于创建符合 LangGPT 格式的结构化提示词的工具。它能够根据用户的需求生成高质量的 AI 助手提示词。

## 使用方法

### 1. 基础使用

直接使用 `langGPT-prompt.md` 文件中的提示词，向 AI 助手描述你的需求：

```
请帮我生成一个 LangGPT 格式的提示词，用于创建一个 [你的需求描述]
```

### 2. 高级使用

使用 `langGPT-prompt-generator.md` 文件中的高级版本，可以获得更详细和专业的提示词生成服务。

## 需求描述模板

为了获得更好的生成效果，建议按照以下模板描述你的需求：

### 角色定位
- **角色名称**：你希望 AI 助手扮演什么角色？
- **主要功能**：这个助手应该具备哪些核心功能？
- **目标用户**：主要服务于哪些用户群体？

### 技能要求
- **专业知识**：需要哪些领域的专业知识？
- **技术技能**：需要掌握哪些技术或工具？
- **软技能**：需要具备哪些沟通、分析等能力？

### 使用场景
- **应用场景**：在什么情况下使用这个助手？
- **工作流程**：希望助手按照什么步骤工作？
- **输出格式**：期望得到什么格式的输出？

### 约束条件
- **行为规范**：有什么行为限制或要求？
- **安全考虑**：需要特别注意哪些安全问题？
- **质量要求**：对输出质量有什么特殊要求？

## 示例需求描述

### 示例1：技术专家
```
我想创建一个全栈开发专家的 AI 助手，主要功能包括：
- 提供技术方案设计和架构建议
- 帮助解决开发中的技术难题
- 代码审查和优化建议
- 技术选型指导

目标用户是开发者和技术团队，需要具备前端、后端、数据库、DevOps 等全栈技能。
使用场景包括项目开发、技术咨询、代码优化等。
期望输出包含代码示例、架构图、实现步骤等。
```

### 示例2：创意助手
```
我想创建一个创意写作助手，主要功能包括：
- 文章创作和内容生成
- 创意构思和头脑风暴
- 文案优化和润色
- 多语言内容创作

目标用户是内容创作者、营销人员、作家等。
需要具备优秀的写作能力、创意思维、多语言技能。
使用场景包括文章写作、广告文案、创意策划等。
期望输出格式清晰、语言优美、创意丰富。
```

### 示例3：教育导师
```
我想创建一个编程教育导师，主要功能包括：
- 编程知识讲解和教学
- 学习路径规划
- 代码练习和项目指导
- 学习进度跟踪

目标用户是编程初学者和进阶学习者。
需要具备丰富的编程知识、教学经验、耐心指导能力。
使用场景包括在线学习、编程培训、项目实践等。
期望输出包含详细解释、代码示例、练习题等。
```

## 生成结果优化

生成的提示词可能需要根据具体需求进行调整：

### 1. 检查完整性
- 确保包含所有必要的部分（Role、Profile、Goals、Constraints、Skills、Workflows）
- 检查是否有遗漏的重要信息

### 2. 优化表达
- 使用清晰、专业的语言
- 避免过于复杂或模糊的表述
- 确保逻辑性和可读性

### 3. 添加细节
- 根据实际需求添加具体的示例
- 细化工作流程和步骤
- 明确输出格式和要求

### 4. 测试验证
- 在实际使用中测试生成的提示词
- 根据效果进行必要的调整
- 收集反馈并持续优化

## 常见问题

### Q1: 生成的提示词太长怎么办？
A: 可以简化部分内容，保留核心功能，或者将复杂功能拆分为多个专门的助手。

### Q2: 如何确保生成的提示词质量？
A: 提供详细的需求描述，使用具体的示例，并在生成后进行测试和调整。

### Q3: 可以生成多语言提示词吗？
A: 可以，在需求描述中明确指定目标语言，生成器会相应调整。

### Q4: 如何添加自定义的工作流程？
A: 在需求描述中详细说明期望的工作步骤，生成器会将其整合到 Workflows 部分。

## 最佳实践

1. **详细描述需求**：提供尽可能详细的需求描述，包括具体的使用场景和期望结果。

2. **使用具体示例**：通过具体的示例来说明期望的功能和行为。

3. **分步骤优化**：先生成基础版本，然后根据实际使用效果逐步优化。

4. **保持简洁**：避免过于复杂的提示词，保持核心功能的清晰性。

5. **定期更新**：根据使用反馈和需求变化，定期更新和优化提示词。

## 文件说明

- `langGPT-prompt.md`：基础版本的提示词生成器
- `langGPT-prompt-generator.md`：高级版本的提示词生成器，包含更多功能和示例
- `langGPT-usage-guide.md`：本使用指南

选择适合你需求的版本使用即可。 