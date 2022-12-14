# Product Requirements Documentation
- Download the expo app on your android device and scan the qr code below to access application
- Donate to fund deployment to Google Play Store ($25) or iOS app store ($99)

## Expo App
![expo app](https://react-native-todo-cj.s3.us-east-2.amazonaws.com/docs/Expo+App.webp)

## QR Code
![Todo QR Code](https://react-native-todo-cj.s3.us-east-2.amazonaws.com/docs/Expo+Publish+QR+Code.png)

**Summary**
| Field | Detail |
|-------|--------|
| Project Name | React-Native Todo |
| Description |Manages tasks on an android device |
| Developers | Calvin Harris |
| Live Website | https://expo.dev/@contactharrisc2/Todo-Mobile?serviceType=classic&distribution=eexpo-go |
| Repo | https://github.com/Newbclharri/React-Native-To-Do  |
| Planning | https://miro.com/app/board/uXjVPfU1C5Q=/?share_link_id=563111831555 |
| Technologies | JSX, JavaScript, React-Native, Expo CLI, Firebase, Google Cloud, Miro, Github |
|Backend| Firebase 9.6.11|
|Frotend | React Native|

# Things to Come:
- Add authentication and authorization
- Add notes on detail page
- Drag and reorder todos to dynamically prioritize items
- Keep previous text during edit


# Problem Being Solved and Target Market

Quickly manage list of tasks on an android mobile device

# User Stories

- As a user, I want to view all todos
- I want to edit a todo
- I want to delete a todo

# Route Tables
|Name|Action|
|----|------|
|Home|Index|
|x|Delete|
|Detail|Edit|

# Component Architecture

```mermaid
flowchart LR
  App-->Home-->Detail  
```
![Hierarchy](https://react-native-todo-cj.s3.us-east-2.amazonaws.com/docs/React-Native+ToDo+Hierarchy.png)

# User Interface Mockups:

## Home
![Home](https://react-native-todo-cj.s3.us-east-2.amazonaws.com/docs/1+ToDo+Home+Screen.png)

## Detail
![Detail](https://react-native-todo-cj.s3.us-east-2.amazonaws.com/docs/2+ToDo+Detail.png)

