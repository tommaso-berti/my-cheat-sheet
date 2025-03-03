# Cheatsheet Components Quick Reference

## Card Types

### Small Card
```html
<div class="card small">
    <h3>Title</h3>
    <div class="content standard-content">
        <p>Content goes here...</p>
    </div>
</div>
```

### Medium Card
```html
<div class="card medium">
    <h3>Title</h3>
    <div class="content standard-content">
        <p>Content goes here...</p>
    </div>
</div>
```

### Tall Card
```html
<div class="card tall">
    <h3>Title</h3>
    <div class="content standard-content">
        <p>Content goes here...</p>
    </div>
</div>
```

## Content Types

### Standard Content
```html
<div class="content standard-content">
    <p>Standard text content goes here...</p>
</div>
```

### Code Content
```html
<div class="content code-content">
    <button class="copy-button"><img src="/resources/icons/copy.png" alt="copy icon"></button>
    <pre><code class="code">Your code here...</code></pre>
</div>
```

### List Content
```html
<div class="content list-content">
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
</div>
```

### Definition Content
```html
<div class="content definition-content">
    <ul>
        <li><span class="code-attribute">Attribute</span><span class="code-definition">Definition</span></li>
        <li><span class="code-attribute">Attribute</span><span class="code-definition">Definition</span></li>
        <li><span class="code-attribute">Attribute</span><span class="code-definition">Definition</span></li>
    </ul>
</div>
```

## Example Usage

### Small Card with Standard Content
```html
<div class="card small">
    <h3>What is SSH?</h3>
    <div class="content standard-content">
        <p>SSH, or Secure Shell, is a cryptographic network protocol used for secure data communication...</p>
    </div>
</div>
```

### Medium Card with Code Content
```html
<div class="card medium">
    <h3>Code Example</h3>
    <div class="content code-content">
        <button class="copy-button"><img src="/resources/icons/copy.png" alt="copy icon"></button>
        <pre><code class="code">{
  "name": "Jason",
  "age": 39,
  "height": 1.92,
  "gender": "M",
  "salary": 70000,
  "married": true,
  "children": [
    {"name": "Tom", "age": 9, "gender":"M"},
    {"name": "Ava", "age": 7, "gender":"F"}
  ]
}</code></pre>
    </div>
</div>
```

### Medium Card with List Content
```html
<div class="card medium">
    <h3>List Example</h3>
    <div class="content list-content">
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
    </div>
</div>
```

### Medium Card with Definition Content
```html
<div class="card medium">
    <h3>Definitions</h3>
    <div class="content definition-content">
        <ul>
            <li><span class="code-attribute">bool</span><span class="code-definition">A boolean value</span></li>
            <li><span class="code-attribute">int</span><span class="code-definition">An integer value</span></li>
            <li><span class="code-attribute">string</span><span class="code-definition">A string value</span></li>
        </ul>
    </div>
</div>
```

## Additional Styles

### Highlighted Section
```html
<h1><a href="#section-id" class="highlight-section">#</a> Section Title</h1>
```

### Subtitle
```html
<h4 class="subtitle">Subtitle Text</h4>
```

## CSS Classes

- `.card`: Base class for all cards.
- `.small`: Modifier for small cards.
- `.medium`: Modifier for medium cards.
- `.tall`: Modifier for tall cards.
- `.content`: Base class for content within cards.
- `.standard-content`: Modifier for standard text content.
- `.code-content`: Modifier for code content.
- `.list-content`: Modifier for list content.
- `.definition-content`: Modifier for definition content.
- `.highlight-section`: Class for highlighted section links.
- `.subtitle`: Class for subtitles.