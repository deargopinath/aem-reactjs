// Page - Maps to aem-reactjs/components/structure/page
 
import {Page, MapTo, withComponentMappingContext } from "@adobe/cq-react-editable-components"
import {withRoute} from '../utils/RouteHelper'

class AEMReactJSPage extends Page {
 
    get containerProps() {
        let attrs = super.containerProps
        attrs.className = ('aem-page AEMReactJSPage')
        console.log("Class name = " + attrs.className)
        return attrs
    }
}
 
export default MapTo('aem-reactjs/components/structure/page')(withComponentMappingContext(withRoute(AEMReactJSPage, null)))
