import { AppBar,Toolbar,styled } from "@mui/material";

import img1 from '../Images/download.png'
const Container=styled(AppBar)`
    background : #060606;
    height : 9vh;
    `
const Header=()=>{
    const logo='/Users/ramcharantejamaduri/Desktop/codepenclone/src/components/download.png'
    return(
        <Container position="relative">
            <Toolbar>
                <img src={img1} alt='logo' style={{width:40}} />
            </Toolbar>
        </Container>
    )
}
export default Header;