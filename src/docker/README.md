# docker的安装及常用命令
- 安装：在ubuntu 22.04上安装docker

## Dockerfile的常用命令

### 基础命令
- `FROM`: 指定基础镜像，必须是第一条指令
  - 例：`FROM ubuntu:20.04`

- `WORKDIR`: 设置工作目录
  - 例：`WORKDIR /app`

- `COPY`: 复制本地文件到容器中
  - 例：`COPY . /app`

- `ADD`: 类似COPY，但支持URL和自动解压缩
  - 例：`ADD https://example.com/file.tar.gz /app`

- `RUN`: 执行命令并创建新的镜像层
  - 例：`RUN apt-get update && apt-get install -y python3`

- `CMD`: 容器启动时执行的默认命令
  - 例：`CMD ["python3", "app.py"]`

- `ENTRYPOINT`: 容器启动时执行的入口命令
  - 例：`ENTRYPOINT ["nginx", "-g", "daemon off;"]`

### 环境相关
- `ENV`: 设置环境变量
  - 例：`ENV NODE_ENV=production`

- `ARG`: 构建时的参数
  - 例：`ARG VERSION=1.0`

### 暴露端口和数据卷
- `EXPOSE`: 声明容器运行时监听的端口
  - 例：`EXPOSE 80`

- `VOLUME`: 创建挂载点
  - 例：`VOLUME /data`

### 最佳实践
1. 使用多阶段构建减小镜像大小
2. 合并RUN命令减少镜像层数
3. 使用.dockerignore排除不需要的文件
4. 选择合适的基础镜像
5. 及时清理缓存和临时文件