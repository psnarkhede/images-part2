function navbar() {
    return `    <div id="searchtab">
    <input type="text" placeholder="search" id="search">
</div>

<select name="sort" id="sort">
<option value="latest">Latest</option>
<option value="relevant">Relevant</option>
</select>

<select name="filter" id="filter">
<option value="landscape">Landscape</option>
<option value="portrait">Portrait</option>
<option value="squarish">Squarish</option>
</select>

<div id="parameters">
    <h3 id="nature">Nature</h3>
    <h3 id="cars">Cars</h3>
    <h3 id="cartoons">Cartoons</h3>
    <h3 id="films">Films</h3>
    <h3 id="technology">Technology</h3>
    <h3 id="science">Science</h3>
</div>
`;
}

export { navbar };