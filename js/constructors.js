/**
 * Created by Blake on 5/18/2015.
 */

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
function Location(tag, name, locationType, description, onCampus, x, y) {
    this.tag = tag;
    this.name = name;
    this.locationType = locationType;
    this.description = description;
    this.onCampus = onCampus;
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
function Navigation(tag, styleClass, ttip, dest, direction, x, y) {
    this.tag = tag;
    this.styleClass = styleClass;
    this.ttip = ttip;
    this.dest = dest;
    this.direction = direction;
    this.x = x;
    this.y = y;
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
}


