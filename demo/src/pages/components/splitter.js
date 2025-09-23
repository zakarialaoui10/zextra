import 'zextra/style'
import { HSplitter } from "zextra/layouts";
import {tags} from 'ziko'

const App = () => {
return HSplitter(
    tags.section('Top Panel'),
    tags.section('Bottom Panel')
    ).style({
        width : '90vw',
        height : '90vh',
        margin : 'auto'
    })
}

export default App

