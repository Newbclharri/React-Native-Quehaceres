# Product Requirements Documentation

**Summary**
| Field | Detail |
|-------|--------|
| Project Name | React-Native ToDO |
| Description |Manages tasks on an android device |
| Developers | Calvin Harris |
| Live Website | https://expo.dev/@contactharrisc2/Todo-Mobile?serviceType=classic&distribution=eexpo-go |
| Repo | https://github.com/Newbclharri/React-Native-To-Do  |
| Planning | https://miro.com/app/board/uXjVPfU1C5Q=/?share_link_id=563111831555 |
| Technologies | JSX, JavaScript, React-Native, Firebase, Google Cloud, Miro, Github |

## Things I Want to Improve:
- Add authentication and authorization
 - add notes on detail page
 - Drag and reorder todos to dynamically prioritize


## Problem Being Solved and Target Market

Quickly manage list of tasks on an android mobile device

## User Stories

- As a user, I want to view all todos
- I want to edit a todo
- I want to delete a todo

## Route Tables
|Name|Action|
|----|------|
|Home|Index|
|x|Delete|
|Detail|Edit|

## Component Architecture

```mermaid
flowchart LR
  App-->Home-->Detail  
```
![Hierarchy](https://drive.google.com/file/d/1TymquIwBlgM3ip0BuQzpkwcA1bed-uuC/view?usp=sharing)

## User Interface Mockups

![Home](https://drive.google.com/file/d/1pRDA34hVlkKPgjUQJAT0BcrXrUb2YJDV/view?usp=sharing)
![Detail](https://drive.google.com/file/d/1jIVDXG_OtAiyR5i03W6Db9tBshR5VIot/view?usp=sharing)

