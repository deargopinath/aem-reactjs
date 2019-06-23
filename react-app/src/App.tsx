import React from 'react';
import { Page, withModel, EditorContext, Utils} from '@adobe/cq-react-editable-components';
import Header from './components/Header'

// This component is the application entry point
class App extends Page {
    render() {
        return (
            <div className="App">
                <Header navigationRoot="/content/aem-reactjs/react/home"/>
                <EditorContext.Provider value={ Utils.isInEditor() }>
                    { super.childComponents }
                    { super.childPages }
                </EditorContext.Provider>
            </div>
        )
    }
}
export default withModel(App);