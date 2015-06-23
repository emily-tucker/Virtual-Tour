
/**********************************************
 * Location object
 *
 *
 * Creates an instance of a Location Item
 * @constructor
 * @this {Navigation}
 * @param {string} tag The location tag of the navigation item (should be in form # + location, i.e #hurst
 * @param {string} name The name of the navigation item corresponding to div id to be filled
 * @param {string} locationType Type of location, i.e. "academic", etc
 * @param {string} description The description of the current location
 * @param {Boolean} onCampus If location is on campus or off campus
 *
 *************************************************/
function Location(tag, name, locationType, description, x, y, locationTrack) {
    this.tag = tag;
    this.name = name;
    this.locationType = locationType;
    this.description = description;
    this.x = x;
    this.y = y;

}


/************************************************************
 * Navigation Object
 *
 * Creates an instance of a Navigation Item
 * @constructor
 * @this {Navigation}
 * @param {string} tag The location tag of the navigation item (should be in form # + location, i.e #hurst
 * @param {string} styleClass The css style class name (no spaces)
 * @param {string} ttip Tool tip
 * @param {string} destination The hash location destination (i.e. "#hurst)
 * @param {string} direction The direction of navigation arrow (i.e. "back", "forward", "right", "left")
 * @param {number} x x coordinate in pixels (for on campus)
 * @param {number} y y coordinate in pixels (for on campus)
 *************************************************************/
function Navigation(tag, styleClass, ttip, dest, direction, x, y, tourTracks) {
    this.tag = tag;
    this.styleClass = styleClass;
    this.ttip = ttip;
    this.dest = dest;
    this.direction = direction;
    this.x = x;
    this.y = y;
    this.tourTracks = tourTracks;
}

/***************************************************************
 * Hotspots
 *
 * Creates an instance of a Hotspot
 * @constructor
 * @this {Hspot}
 * @param {string} tag The location tag of the hotspot (should be in form # + location, i.e #hurst
 * @param {string} styleClass name of css class (no spaces)
 <thwaydiv class="menu">
 <div class="wrap">
 <div class="blue menu-container">
 <ul id="drilldown-1">
 </ul>
 </div>
 </div>
 </div>
 * @param {string} ttip Tooltip for hotspot
 * @param {string} dest The destination url for hotspot
 * @param {Number} x The x coordinate of the hotspot (in pixels)
 * @param {Number} y The y coordinate of the hotspot (in pixels)
 *****************************************************************/
function Hspot(tag, styleClass, ttip, dest, x, y) {
    this.tag = tag;
    this.styleClass = styleClass;
    this.ttip = ttip;
    this.dest = dest;
    this.x = x;
    this.y = y;
};

/******************************************************
 * Carousel Item Constructor
 *
 * @param tags
 * @param full
 * @param thumb
 * @param ttip
 * @param html
 * @constructor
 *****************************************************/

function CarouselItem(tags, full, thumb, ttip, html) {
    if (html === undefined) {
        this.video = true;
        this.html = ttip;
        this.ttip = thumb;
        this.thumb = full;
        this.full = null;
        this.tags = tags;
    } else {
        this.tags = tags;
        this.full = full;
        this.thumb = thumb;
        this.ttip = ttip;
        this.html = html;
    }
}

function Image(name, fname) {
    this.name = name;
    this.fname = fname;
}

/******************************************************
 * HowTo  Constructor
 * @param info
 * @param data-postion
 * @param data-toggle
 *****************************************************/
var MenuItem = function (opts) {
    this.text = opts.text;
    this.icon = opts.icon ? opts.icon : '';
    this.target = opts.target ? opts.target : '';
    this.onclk = opts.onclick ? opts.onclick : '';
    this.rel = opts.rel ? opts.rel : '';
    this.items = opts.items ? opts.items : [];
    this.href = opts.href ? opts.href : '';
};

