import { Component } from '@stencil/core';

@Component({
  tag: 'au-button',
  styleUrl: 'button.css',
  shadow: true
})
export class Button {
  render() {
    return (
      <button class="test">Hello</button>
    );
  }
}
