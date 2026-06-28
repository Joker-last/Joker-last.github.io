---
title: Maven项目构建
published: 2026-06-27
description: 介绍一下如何构建Maven项目
encrypted: false
pinned: false
hideHomeContent: false
alias: "encrypted-example"
tags: ["Java", "Maven"]
category: "项目"
image: "./cover.webp"
---


- [VsCode](#vscode)
    - [配置环境1](#配置环境1)
    - [安装插件](#安装插件)
    - [创建项目1](#创建项目1)
- [IDEA](#idea)
    - [配置环境2](#配置环境2)
    - [创建项目2](#创建项目2)

## VsCode 

### 配置环境1

- 一、安装JDK：  
1.下载OpenJDK解压，路径不能有中文、空格  
2.配置系统环境变量：
    - 新建 JAVA_HOME = JDK 根目录
    - Path 添加 %JAVA_HOME%\bin  

    3.验证：终端输入 java -version、javac -version 正常输出版本

- 二、安装Apache Maven:  
1.官网下载二进制压缩包，解压到无中文路径（如 D:\apache-maven-3.9.6）  
2.系统环境变量：  
    - 新建 MAVEN_HOME = Maven 解压目录  
    - Path 添加 %MAVEN_HOME%\bin  

    3.验证：终端输入 mvn -v，输出版本即成功

### 安装插件

- 安装插件  
1.打开扩展面板：Ctrl+Shift+X  
2.搜索安装 Extension Pack for Java（微软官方 Java 全套包）
内置包含：  
    - Maven for Java（Maven 核心插件）  
    - Java 语言支持、调试器、单元测试等

### 创建项目1

- 创建项目  
1.打开命令面板：Ctrl+Shift+P  
2.输入：Maven: Create Maven Project 回车  
3.选择模板：  
    - maven-archetype-quickstart：普通 Java 控制台项目  
    - maven-archetype-webapp：Java Web 项目  
    
    4.选择模板版本（直接回车默认最新）  
    5.依次输入项目坐标：  
        - Group Id：组织包名，例 com.demo  
        - Artifact Id：项目名称，例 maven-demo  
        - Version：版本，默认 1.0-SNAPSHOT  
        - Package：代码包名，默认同 GroupId  
        
    6.选择项目存放文件夹，等待自动生成结构

## IDEA

### 配置环境2

- 一、安装 JDK + 本地 Maven  
    - 1.JDK 11/17，配置 JAVA_HOME，终端 java -version 验证  
    - 2.解压 Apache Maven，配置 MAVEN_HOME，终端 mvn -v 验证  
    - 3.修改 Maven conf/settings.xml（核心两步）

- 二、IDEA 全局配置 Maven（关键）  
    - 1.Windows：File → Settings；macOS：IntelliJ IDEA → Preferences  
    - 2.找到 Build, Execution, Deployment → Build Tools → Maven  
        - Maven home path：选择你本地解压的 Maven 目录（不选 IDEA 自带）  
        - User settings file：勾选 Override，选中刚才改好的 settings.xml  
        - Local repository：会自动读取配置里的仓库路径  
        
    - 3.点击 Apply → OK
### 创建项目2

- 新建普通Java SE Maven项目  
    - 1.顶部菜单 File → New → Project  
    - 2.左侧选择 Maven，右侧：  
        - Build system：Maven  
        - Project SDK：选择已配置好的 JDK  
        - 不要勾选 Create from archetype（纯净空项目）  
    - 3.展开 Advanced Settings，填写 Maven 坐标：  
        - GroupId：组织包名，例 com.demo  
        - ArtifactId：项目名，例 maven-demo  
        - Version：默认 1.0-SNAPSHOT  
    - 4.Name 和 Location 自动填充，选择存放文件夹，点击 Create  
    - 5.等待右下角加载依赖，自动生成标准目录