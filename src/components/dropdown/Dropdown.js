import Component from '../base_component.js'
import { required } from '../../validators'
import { regexp } from '../../validators'

const set_values = (selection) => selection
  .property('value', d => d.value)
  .text(d => d.text)

const enter = (selection) => selection
  .enter()
  .append('option')
  .attr('class', 'ds--select-option')
  .call(set_values)

const exit = (selection) => selection
  .exit()
  .remove()

const update = (selection) => selection
  .call(set_values)

const update_pattern = (selection) =>
  [enter, exit, update].map(f => f(selection))

const DropdownComponent = Component({
  'validators': [
    required('variable'), regexp('variable', /^[A-Za-z]([_A-Za-z0-9-]*[_A-Za-z0-9])?$/),
    required('default')],
  'init': (args, selection) => selection
    .append('select').attr('class', 'ds--select'),
  'render': (args, selection, data, item) => item
    .selectAll('option').data(data).call(update_pattern)
})

export default DropdownComponent
