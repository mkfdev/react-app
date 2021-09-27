## 1. 소개 및 목적
- 간단한 리액트 To do list
- 리액트 Hooks 사용
- 목적: 리액트 함수형 Hooks 이해


## 2. 사용 라이브러리 or 모듈
  
  font fontawesome
  ```
  yarn add @fortawesome/fontawesome-free
  ```
  react-app-polyfill
  ```
  yarn add react-app-polyfill

  import 'react-app-polyfill/ie11';
  import 'react-app-polyfill/stable';

  ```
  그리고 browserlist에 "IE 11" 추가


## 3. 배운것

### class

class는 리액트에서 제공하는 Component 클래스를 상속받아서 만든다.

내 컴포넌트 안에 state 오브젝트가 있음

lifecycle method가 있음.

state가 변경되면 render가 호출되고 화면이 업데이트됨.

this binding issue가 불편하다.

lifecycle 코드가 중복될 수 있다.


### 함수형

함수형은 간단하게 함수로 만든다.

state, lifecycle method가 없다 대신에 리액트 훅으로 사용이 가능하다.

state -> useState 사용

componentWillMount(), componentDidMount(), componentWillUnmount() 등등 -> useEffect 사용


### PureComponent와 Component의 차이

PureComponent는 리액트의 Lifecycle methods 중 하나인 'shouldComponentUpdate'을 구현해서 props과 state의 변경사항이 발생하면 shallow comparisons을 하고 오브젝트 자체가 변경되지 않았다면 다시 render를 하지 않는 컴포넌트이다.


### JSX

JSX파일에서는 javascript안에서 html을 직관적으로 작성하여 이용할 수 있음. 자바스크립트, 비즈니스 로직도 작성이 가능하다.


### state를 업데이트 하는 방법

state는 항상 불변성을 유지한다(직접적으로 수정X)

1. 새로운 state 오브젝트 인자를 바로 받는 방법
2. 이전 state를 받아 계산해서 새로운 state를 리턴하는 함수를 인자로 받는 방법

```
1. setTodos(newTodo); 

2. setTodos((prevTodo) => {
  return [...prevTodo, { id: maxId + 1, text: newText, completed: false }]
});
```

# 배포
https://61516e8509f0471a057ad193--mk-todo-list.netlify.app/
