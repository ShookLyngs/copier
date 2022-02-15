import Clipboard from 'clipboard';
export { default as Clipboard } from 'clipboard';

export interface CopyTextOptions extends Clipboard.Options {
  appendToBody: boolean;
}

export function copyText(text: string, config: Partial<CopyTextOptions> = {}): Promise<Clipboard.Event> {
  const options = createOptions(config);

  const button = document.createElement('button');
  button.style.display = 'none';

  const clipboard = new Clipboard(button, {
    text: () => text,
  });

  function destroy() {
    clipboard.destroy();
    if (options.appendToBody) {
      document.body.removeChild(button);
    }
  }

  if (options.appendToBody) {
    document.body.appendChild(button);
  }

  return new Promise<Clipboard.Event>((resolve, reject) => {
    clipboard.on('success', (event) => {
      resolve(event);
      destroy();
    });
    clipboard.on('error', (event) => {
      reject(event);
      destroy();
    });

    button.click();
  });
}

function createOptions(options: Partial<CopyTextOptions>): CopyTextOptions {
  return {
    appendToBody: true,
    ...options,
  };
}