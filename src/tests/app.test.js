import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from 'react-dom/test-utils';
import App from '../App'
import {Header, Button, Modal, Select} from '../components'
import NoteBlock from '../components/Note-block/NoteNlock'
import AddNote from '../pages/Add-note'

let container = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
})

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
})

it("render component app", () => {
  act(() => {
    render(<App />, container)
  })
})

it("render component header", () => {
  act(() => {
    render(<Header isNote={true} />, container)
  })
})

it("render component note block", () => {
  act(() => {
    render(<NoteBlock smile='' src='' title='' date='' text="tddd" />, container)
  })
})

it("render component addnote", () => {
  act(() => {
    render(<AddNote />, container)
  })
})

it("render component Modal", () => {
  act(() => {
    render(<Modal />, container)
  })
})

it("render component Main", () => {
  act(() => {
    render(<Button />, container)
  })
})

it("render component Select", () => {
  act(() => {
    render(<Select />, container)
  })
})