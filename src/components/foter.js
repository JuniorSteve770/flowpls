import React,{Component} from 'react';
import {Footer, FooterSection, FooterDropDownSection, FooterLinkList, Tooltip, Icon} from 'react-mdl'


class foter extends Component {
   
    render() {
        return (            
 
            <Footer size="mega">
                                
                <FooterSection type="middle">

                    <FooterDropDownSection  title={<a href="#"><h4>Flow</h4></a>}>
                        <FooterLinkList>   
                            <p>                   
                            Manage your team's work, projects,<br/> 
                            and tasks in one collaborative workspace.                            
                            </p>  
                            <Tooltip label={<span > LogIn via <strong>facebook</strong></span>}>
                                <Icon name="facebook" />
                            </Tooltip>
                        </FooterLinkList>
                    </FooterDropDownSection>            

                    <FooterDropDownSection title="Product">
                        <FooterLinkList>
                            <a href="#">Features</a>
                            <a href="#">Pricing</a>
                            <a href="#">Apps</a>
                            <a href="#">API</a>
                            <a href="#">Support</a>
                            <a href="#">Customers</a>
                        </FooterLinkList>
                    </FooterDropDownSection>
                    <FooterDropDownSection title="Solutions">
                        <FooterLinkList>
                            <a href="#">Marketing Teams</a>
                            <a href="#">Creative Teams</a>
                            <a href="#">Product Teams</a>
                            <a href="#">Finance Teams</a>
                            <a href="#">Your Company</a>
                        </FooterLinkList>
                    </FooterDropDownSection>
                    <FooterDropDownSection title="Company">
                        <FooterLinkList>
                            <a href="#">Blog</a>
                            <a href="#">Careers</a>
                            <a href="#">Contact</a>
                            <a href="#">Security</a>
                            <a href="#">Terms Of Use</a>
                            <a href="#">Privacy Policy</a>
                        </FooterLinkList>
                    </FooterDropDownSection>
                
                </FooterSection>
                <FooterSection type="bottom" >        
                    <ul>
                        <a >Proudly a part of <strong> <a href="https://www.tinycapital.com/">Tiny</a></strong>
                        <br/>
                        Copyright &copy; {new Date().getFullYear()} Flow Technologies Ltd. All rights reserved.</a>
                    </ul>
                </FooterSection>
            </Footer>
        
        );
    }
}

export default foter;