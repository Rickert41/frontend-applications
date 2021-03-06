import * as d3 from 'd3';
import { storeData } from '../../localStorage'

let mapSVG = d3.select("#map");

let translate;

// Map and projection
let mapProjection = d3.geoMercator()
    .center([6.36, 52.4]) // GPS of location to zoom on
    .scale(7000) // This is like the zoom
// .translate([ width/2, height/2 ])

let mapPath = d3.geoPath().projection(mapProjection)

function calculateRadius(capacity) { //function that calculates the radius of a bubble on the bubble map
    let radius;
    if (capacity > 1000) {
        radius = 10;
    } else if (capacity < 1000 && capacity > 700) {
        radius = 8;
    } else if (capacity < 700 && capacity > 500) {
        radius = 6;
    } else {
        radius = 4;
    }
    return (radius);
}

function mapThings(object) { //gets called when data is ready

    //draw the circles on the map
    mapSVG.select('#circles').selectAll('circle')
        .data(object)
        .enter().append('circle')
        .attr('class', d => {
            return d.maximumVehicleHeight
        }) //adds class to interact with slider
        .attr('cx', d => {
            return mapProjection(d.location)[0];
        }) //adds location from data object
        .attr("cy", d => {
            return mapProjection(d.location)[1];
        })
        .attr("r", d => {
            return calculateRadius(d.capacity);
        }) //calls function to calculate radius
}


function onZoom(event, mapSVG) {
    mapSVG.selectAll('svg g').attr('transform', event.transform);
    translate = event.transform;
    storeData(translate)
}

function updateColor(d) {
    if(d.maximumVehicleHeight <= 200) { // if height is more then 200
        return 'redDot'; // return correct classname
    } else {
        return 'greenDot';
    }
}

export {
    onZoom,
    calculateRadius,
    mapProjection,
    mapPath,
    updateColor
}