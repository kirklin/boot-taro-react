# API模块使用指南

## 项目API架构

```
src/
  ├── api/
  │   ├── models/           # 类型定义
  │   │   ├── common.ts     # 通用类型
  │   │   ├── user.ts       # 用户相关类型
  │   │   └── ...
  │   ├── endpoints/        # API端点定义
  │   │   ├── user.ts       # 用户相关API
  │   │   └── ...
  │   ├── hooks/            # React Query钩子
  │   │   ├── useUser.ts    # 用户数据钩子
  │   │   └── ...
  │   ├── core/             # 核心工具
  │   │   ├── apiFactory.ts # API工厂
  │   │   └── queryKeys.ts  # 查询键管理
  │   └── index.ts          # 统一导出
```

## 使用示例

### 1. 使用现有Hook获取数据

```jsx
import { useCurrentUser, useUserProfile } from "~/api";

function UserProfile({ userId }) {
  // 获取指定用户信息
  const { data: user, isLoading, error } = useUserProfile(userId);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <Error message={error.message} />;
  }

  return (
    <View>
      <Text>{user.nickname}</Text>
      {/* 其他用户信息 */}
    </View>
  );
}

function CurrentUserInfo() {
  // 获取当前登录用户
  const { data: currentUser, isLoading } = useCurrentUser();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View>
      <Avatar src={currentUser.avatar_url} />
      <Text>{currentUser.nickname}</Text>
    </View>
  );
}
```

### 2. 使用Mutation更新数据

```jsx
import { useUpdateUser } from "~/api";

function UserProfileEditor({ userId }) {
  const [nickname, setNickname] = useState("");
  const updateUser = useUpdateUser();

  const handleSubmit = () => {
    updateUser.mutate({
      id: userId,
      nickname,
    }, {
      onSuccess: () => {
        // 更新成功处理
        Taro.showToast({ title: "更新成功" });
      },
      onError: (error) => {
        // 错误处理
        Taro.showToast({ title: error.message, icon: "none" });
      }
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        value={nickname}
        onChange={e => setNickname(e.target.value)}
        placeholder="昵称"
      />
      <Button
        loading={updateUser.isPending}
        type="primary"
        formType="submit"
      >
        保存
      </Button>
    </Form>
  );
}
```

### 3. 使用分页Hook获取列表数据

```jsx
import { messageApi } from "~/api/endpoints/message";
import { useInfiniteData } from "~/api/hooks/useInfiniteData";

function MessageList() {
  const {
    data: messages,
    isLoading,
    pagination,
    loadMore,
  } = useInfiniteData(
    ["messages", "list"],
    params => messageApi.getMessagesList(params),
    { current: 1, page_size: 10 },
    { defaultPageSize: 10 }
  );

  return (
    <View>
      {isLoading && <Loading />}

      <List>
        {messages.map(message => (
          <ListItem key={message.id} title={message.content} />
        ))}
      </List>

      {pagination.hasNext && (
        <Button onClick={loadMore}>加载更多</Button>
      )}
    </View>
  );
}
```

## 扩展新API模块

### 1. 定义模型类型

```typescript
// src/api/models/message.ts
export interface Message {
  id: string;
  content: string;
  created_at: string;
  // 其他字段...
}

export interface CreateMessageRequest {
  receiver_id: string;
  content: string;
  // 其他字段...
}
```

### 2. 定义API端点

```typescript
import type { PageData } from "../models/common";
import type { CreateMessageRequest, Message } from "../models/message";
// src/api/endpoints/message.ts
import { createApi } from "../core/apiFactory";

export const messageApi = createApi({
  getMessagesList: {
    method: "GET",
    path: "/v1/api/messages",
    params: {} as { current: number; page_size: number },
    response: {} as PageData<Message>,
  },

  createMessage: {
    method: "POST",
    path: "/v1/api/messages",
    params: {} as CreateMessageRequest,
    response: {} as Message,
  },

  // 其他端点...
});
```

### 3. 创建React Query钩子

```typescript
import type { CreateMessageRequest } from "../models/message";
// src/api/hooks/useMessage.ts
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../core/queryKeys";
import { messageApi } from "../endpoints/message";

export function useCreateMessage() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateMessageRequest) => messageApi.createMessage(data),
    onSuccess: () => {
      // 使消息列表缓存失效
      queryClient.invalidateQueries({
        queryKey: queryKeys.message.list(),
      });
    },
  });
}

// 其他钩子...
```
