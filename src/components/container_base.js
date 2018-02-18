import default_parser from '../default_parser.js'
import Component from './base_component.js'

const ContainerComponent = ({ wrapper_tag, wrapper_class, validators, init }) => Component({
  'render': (args, selection, data) => {
    selection.selectAll(wrapper_tag).remove()
    if (data instanceof Array) data.map((definition) => {
      const wrapper = selection
        .append(wrapper_tag)
        .attr('class', wrapper_class)
      default_parser(definition)(wrapper)
    })
  },
  'init': init,
  'validators': validators || [],
})

export default ContainerComponent
