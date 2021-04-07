 

## react-coding-keyboard

A keyboard for mobile happy coding.

### Usage

```tsx
<Keyboard
             show={showKeyboard.value}
             onHide={() => showKeyboard.value = false}
             onKey={key => code.value += key} 
            //  onBackspace={() => setCode(code.slice(0, -1))}
            />
```



