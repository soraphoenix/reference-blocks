import { h, app } from "hyperapp"
import update from 'immutability-helper'

app({
  state: {
    title: 'Counter',
    total: 0
  },
  view: (state, actions) => <div className={'CounterRoot'}>
    <Header state={state} actions={actions} />
    <ContentArea state={state} actions={actions} />
    <ButtonsArea state={state} actions={actions} />
  </div>,
  root: document.getElementById('app'),
  actions: {
    plus: (state, actions) => {
      return update(state, {total: {$set: state.total + 1}})
    },
    minus: (state, actions) => {
      return update(state, {total: {$set: state.total - 1}})
    },
    reset: (state, actions) => {
      return update(state, {total: {$set: 0}})
    }
  }
})

const Header = ({state, actions}) => {
  return (<div className={'Header'}>
      <h3>{state.title}</h3>
    </div>)
}

const ContentArea = ({state, actions}) => {
  return (<div className={'ContentArea'}>
      <h1>{state.total}</h1>
    </div>)
}

const ButtonsArea = ({state, actions}) => {
  return (<div className={'ButtonsArea'}>
      <div className={'minus'} onclick={actions.minus}>
        -
      </div>
      <div className={'plus'} onclick={actions.plus}>
        +
      </div>
      <div className={'reset'} onclick={actions.reset} style={{
        background: 'red',
        width: '150px',
        textAlign: 'center',
        margin: '0 auto',
        padding: '20px',
        cursor: 'pointer',
        display: 'block',
        borderRadius: (state.total * 2) + 'px',
        transition: 'all .5s ease-in-out'
      }}>
        RESET
      </div>
    </div>)
}
