import { Link } from 'react-router-dom';
import { FaFacebook, FaGoogle } from 'react-icons/fa';

import { Container, Card, Background, Content, SignInSocial, ButtonFace, ButtonGoogle, Button, Input} from './styles';

import dog from '../../assets/dog-left.png';

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

                    <p>Já tem uma conta? <Link to="/">Entrar</Link></p>
                </Content> 
            </Card>
        </Container>
    );
}