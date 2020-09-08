import { $ } from 'shared/js/util'
import * as d3 from 'd3'

let states = [
    {
        name : 'Arizona',
        ecv : 11
    },
    {
        name : 'Florida',
        ecv : 29
    },
    {
        name : 'Michigan',
        ecv : 16
    },
    {
        name : 'Pennsylvania',
        ecv : 20
    }
]

function sum(a, b) {
    return a + b
}

const bidenEcvElement = $('#biden .candidate-ecv')

const trumpEcvElement = $('#trump .candidate-ecv')

// create cards

const wrapperEl = $('.cards-wrapper')
const wrapper = d3.select(wrapperEl)

function updateTotals() {

    console.log(states)

    const trumpTotal = states.filter( state => state.selected === 'trump' )
        .map( state => state.ecv ).reduce(sum, 0)

    const bidenTotal = states.filter( state => state.selected === 'biden' )
        .map( state => state.ecv ).reduce(sum, 0)

    // update the elements on the page

    bidenEcvElement.innerHTML = bidenTotal
    trumpEcvElement.innerHTML = trumpTotal

}

states.forEach( state => {

    const card = wrapper.append('div')
    .attr('class', 'state-card')

    card.append('h2')
        .text( state.name )
    
    card.append('h3')
        .text( state.ecv + ' votes' )

    const buttons = card
    
        .selectAll('button')
        .data(['Biden', 'Trump'])
        .enter()
        .append('button')
        .text(name => name)
        .attr('class', d => 'candidate-button candidate-button--' + d.toLowerCase())

    buttons
        .on('click', name => {

            states = states.map( s => {
        
                if(s.name === state.name) {
                    return Object.assign({}, s, { selected : name.toLowerCase() })
                }
                else {
                        return s
                }
        
            } )
        
            updateTotals()

            buttons.classed('candidate-button--selected', n => n === name)

        })

} )

// compute totals once at the start to set the numbers to 0

updateTotals()