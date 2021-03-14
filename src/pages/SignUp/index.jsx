import { FaFacebook, FaGoogle } from 'react-icons/fa';

import { Container, Card, Background, Content, SignInSocial, ButtonFace, ButtonGoogle, Button, Input} from './styles';

import dog from '../../assets/teste.png';

export function SignUp() {
    return (
        <Container>
            <Card>
                <Background>
                    <img src={dog}></img>
                </Background>
                <Content>
                    <h1>Cadastrar-se</h1>
                    <Input type="text" placeholder="Nome completo" />
                    <Input type="text" placeholder="Email" />
                    <Input type="password" placeholder="Senha" />
                    <Input type="password" placeholder="Confirmar senha" />
                    <Button>CADASTRAR</Button>

                    <p>Já tem uma conta? <a>Entrar</a></p>
                </Content> 
            </Card>
        </Container>
    );
}