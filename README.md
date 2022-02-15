<h1>
  text-copier
  <img src="https://img.shields.io/npm/v/text-copier" alt="npm">
  <img src="https://github.com/ShookLyngs/text-copier/actions/workflows/publish.yml/badge.svg" alt="">
</h1>

Simple clipboard function, written in TypeScript.


## Installation
```shell
npm install --save text-copier
```

## Usage
```typescript
import { copyText } from 'text-copier';

// When user clicks on a button, 
// trigger the function
async function onClick() {
  await copyText('Hello World');
  alert('Copied to clipboard');
}
```

## Error Handling
```typescript
import { copyText, Clipboard } from 'text-copier';

async function onClick() {
  try {
    await copyText('Hello World');
    alert('Copied to clipboard');
  } catch(event: Clipboard.Event) {
    console.error(event);
  }
}
```