import { FaFacebook, FaGoogle } from 'react-icons/fa';

import { Container, Card, Background, Content, SignInSocial, ButtonFace, ButtonGoogle, Button, Input} from './styles';

import dog from '../../assets/teste.png';

export function SignIn() {
    return (
        <Container>
            <Card>
                <Background>
                    <img src={dog}></img>
                </Background>
                <Content>
                    <h1>Entrar</h1>
                    <Input type="text" placeholder="Digite seu email" />
                    <Input type="password" placeholder="Digite sua senha" />
                    <Button>ENTRAR</Button>
                    <span>OU</span>
                    <SignInSocial>
                        <ButtonFace><FaFacebook />Facebook</ButtonFace>
                        <ButtonGoogle><FaGoogle />Google</ButtonGoogle>
                    </SignInSocial>

                    <p>Ainda não é cadastrado? <a>Cadastre-se</a></p>
                </Content> 
            </Card>
        </Container>
    );
}