import React from 'react';

import { createMuiTheme} from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import { blue } from '@material-ui/core/colors';
import { getFilmsFromApiWithSearchedText } from '../API/TMDB'

const theme = createMuiTheme({
    palette: {
        primary: blue,
    },
});


class Search extends React.Component {
    static defaultProps = {
        onComplete : () => {

        }
    }

    getSearchedText = async (event) => {
        const keyword =  event.target.value
        this.props.onComplete(await getFilmsFromApiWithSearchedText(keyword))
    }

    render () {
        return (
            <div>
                <ThemeProvider theme={theme}>
                    <TextField
                        style={{width: '50%', margin: 20}}
                        label="Rechercher"
                        id="mui-theme-provider-standard-input"
                        onChange={(e)=>{this.getSearchedText(e)}}
                    />

                </ThemeProvider>
            </div>

        )
    }
}




export default Search