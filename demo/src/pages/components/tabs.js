import {
    Tabs, 
    TabsController, 
    Tab,
    TabsPanel
} from 'zextra/reveal'
import {tags} from 'ziko'

const App = () => {
    globalThis.t = Tabs(
        TabsController(
            Tab({label : 'Tab 1'}),
            Tab({label : 'Tab 2'}),
            Tab({label : 'Tab 3'}),
            Tab({label : 'Tab 4'}),
            Tab({label : 'Tab 5'}),
            Tab({label : 'Tab 6'}),
            Tab({label : 'Tab 7'}),
            Tab({label : 'Tab 8'}),
            Tab({label : 'Tab 9'})
        ),
        TabsPanel(
            tags.p('Panel 1'),
            tags.p('Panel 2'),
            tags.p('Panel 3'),
            tags.p('Panel 4'),
            tags.p('Panel 5'),
            tags.p('Panel 6'),
            tags.p('Panel 7'),
            tags.p('Panel 8'),
            tags.p('Panel 9')
        ),
        { orientation : 'horizontal'}
    )
    return t
}
export default App