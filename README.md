```markdown
# MyCheatsheet - Quick Reference for Card Components

`MyCheatsheet` is a project designed to provide developers with a quick reference for reusable card components and their internal content structures. It simplifies the process of adding pre-designed cards with various content types to web applications, ensuring consistency and efficiency in development.

## Card Types

### Small Card
A compact card for displaying concise information.

```html
<div class="card small">
    <h3>Title</h3>
    <div class="content">
        <div class="standard-content">
            <p>Content goes here...</p>
        </div>
    </div>
</div>
```

### Medium Card
A medium-sized card suitable for more detailed content.

```html
<div class="card medium">
    <h3>Title</h3>
    <div class="content">
        <div class="standard-content">
            <p>Content goes here...</p>
        </div>
    </div>
</div>
```

### Tall Card
A taller card for displaying extended content.

```html
<div class="card tall">
    <h3>Title</h3>
    <div class="content">
        <div class="standard-content">
            <p>Content goes here...</p>
        </div>
    </div>
</div>
```

## Content Types

### Standard Content
Used for displaying plain text content.

```html
<div class="standard-content">
    <p>Standard text content goes here...</p>
</div>
```

### Code Content
Used for displaying code snippets with a copy button.

```html
<div class="code-content">
    <button class="copy-button"><img src="/resources/icons/copy.png" alt="copy icon"></button>
    <pre><code class="code">Your code here...</code></pre>
</div>
```

### List Content
Used for unordered lists.

```html
<div class="list-content">
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
</div>
```

### Numbered List Content
Used for ordered lists.

```html
<div class="numbered-list-content">
    <ol>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ol>
</div>
```

### Definition Content
Used for displaying definitions in a structured format.

```html
<div class="definition-content">
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
    <div class="standard-content">
        <p>SSH, or Secure Shell, is a cryptographic network protocol used for secure data communication...</p>
    </div>
</div>
```

### Medium Card with Code Content
```html
<div class="card medium">
    <h3>Code Example</h3>
    <div class="code-content">
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
    <div class="list-content">
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
    </div>
</div>
```

### Medium Card with Numbered List Content
```html
<div class="card medium">
    <h3>Numbered List Example</h3>
    <div class="numbered-list-content">
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ol>
    </div>
</div>
```

### Medium Card with Definition Content
```html
<div class="card medium">
    <h3>Definitions</h3>
    <div class="definition-content">
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
Used for creating a highlighted section link.

```html
<h1><a href="#section-id" class="highlight-section">#</a> Section Title</h1>
```

### Subtitle
Used for adding subtitles to sections.

```html
<h4 class="subtitle">Subtitle Text</h4>
```

## CSS Classes

- `.card`: Base class for all cards.
- `.small`: Modifier for small cards.
- `.medium`: Modifier for medium cards.
- `.tall`: Modifier for tall cards.
- `.span-column`: Modifier for spanning columns.
- `.standard-content`: Modifier for standard text content.
- `.code-content`: Modifier for code content.
- `.list-content`: Modifier for list content.
- `.numbered-list-content`: Modifier for numbered list content.
- `.definition-content`: Modifier for definition content.
- `.highlight-section`: Class for highlighted section links.
- `.subtitle`: Class for subtitles.
```
