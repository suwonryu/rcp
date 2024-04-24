import {Component} from 'react'
import ClassComponent from './ClassComponent'
import ArrowComponent from './ArrowComponent'

export default class App extends Component {
  render() {
    return (
      <ul>
        <ClassComponent href="https://www.google.com" text="go to Google" />
        <ArrowComponent href="https://naver.com" text="go to naver" />
      </ul>
    )
  }
}
