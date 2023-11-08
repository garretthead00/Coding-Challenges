/*

Input in a few lines of text which will be parsed into HTML.
The sample input below should generate the markup in the Answer Key.

I'm a line in a paragraph.
I'm a line in the same paragraph.

I'm a new paragraph, because there's a blank line between.
There's also a blank line between me and the header below
for readability, but there doesn't have to be.

# Level 1 heading, rendered with h1 tag
## Level 2 heading, h2 tag
Paragraph between the level 2 and level 6 headings.
###### Level 6 heading (max), h6 tag



-------
Answer Key

<p>I'm a line in a paragraph.
I'm a line in the same paragraph.</p>

<p>I'm a new paragraph, because there's a blank line between.
There's also a blank line between me and the header below
for readability, but there doesn't have to be.</p>

<h1>Level 1 heading, rendered with h1 tag</h1>
<h2>Level 2 heading, h2 tag</h2> 
<p>Paragraph between the level 2 and level 6 headings.</p>
<h6>Level 6 heading (max), h6 tag</h6>

*/

function parseMarkdown(context) {
    const contextArray = context.split("\n");
    const markedUpContext = contextArray.map((context, index) => {
      if (context === "") return context;
  
      if (context.charAt(0) !== "#") {
        return `<p>${context}</p>`;
      } else {
        let [specialTag, ...specialContext] = context.split(" ");
        specialContext = specialContext.join(" ");
        return `<h${specialTag.length}>${specialContext}</h${specialTag.length}>`;
      }
    });
    return markedUpContext.join("\n");
  }
  
  const input = `I'm a line in a paragraph.
  I'm a line in the same paragraph.
  
  I'm a new paragraph, because there's a blank line between.
  There's also a blank line between me and the header below
  for readability, but there doesn't have to be.
  
  # Level 1 heading, rendered with h1 tag
  ## Level 2 heading, h2 tag
  Paragraph between the level 2 and level 6 headings.
  ###### Level 6 heading (max), h6 tag`;
  
  const answerKey = `<p>I'm a line in a paragraph.
  I'm a line in the same paragraph.</p>
  
  <p>I'm a new paragraph, because there's a blank line between.
  There's also a blank line between me and the header below
  for readability, but there doesn't have to be.</p>
  
  <h1>Level 1 heading, rendered with h1 tag</h1>
  <h2>Level 2 heading, h2 tag</h2> 
  <p>Paragraph between the level 2 and level 6 headings.</p>
  <h6>Level 6 heading (max), h6 tag</h6>
  `;
  
  const parsedMarkdown = parseMarkdown(input);
  
  console.log("------ Parse into Markdown -----");
  console.log(`
  Input in a few lines of text which will be parsed into HTML.
  The sample input below should generate the markup in the Answer Key.
  
  I'm a line in a paragraph.
  I'm a line in the same paragraph.
  
  I'm a new paragraph, because there's a blank line between.
  There's also a blank line between me and the header below
  for readability, but there doesn't have to be.
  
  # Level 1 heading, rendered with h1 tag
  ## Level 2 heading, h2 tag
  Paragraph between the level 2 and level 6 headings.
  ###### Level 6 heading (max), h6 tag
  
  
  
  -------
  Answer Key
  
  <p>I'm a line in a paragraph.
  I'm a line in the same paragraph.</p>
  
  <p>I'm a new paragraph, because there's a blank line between.
  There's also a blank line between me and the header below
  for readability, but there doesn't have to be.</p>
  
  <h1>Level 1 heading, rendered with h1 tag</h1>
  <h2>Level 2 heading, h2 tag</h2> 
  <p>Paragraph between the level 2 and level 6 headings.</p>
  <h6>Level 6 heading (max), h6 tag</h6>
  `);
  
  console.log("\n---- Parsed HTML ----");
  console.log(parsedMarkdown);
  console.log("----");
  