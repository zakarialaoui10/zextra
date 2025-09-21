import {
    Tabs, 
    TabsController, 
    Tab,
    TabsPanel
} from 'zextra/nav'
import {tags} from 'ziko'

globalThis.t = Tabs(
    TabsController(
        Tab({label : 'Tab 1'}),
        Tab({label : 'Tab 2'}),
        Tab({label : 'Tab 3'})
    ),
    TabsPanel(
        tags.p('Panel 1'),
        tags.p('Panel 2'),
        tags.p('Panel 3')
    ),
    { orientation : 'vertical'}
)