import React from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar, Image, TextInput, TouchableOpacity } from 'react-native';
import Logo from '../../assets/images/logo.jpg';
import Alan from '../../assets/images/alan.jpeg'; 
import Ari from '../../assets/images/ariane.jpeg'; 
import Esdras from '../../assets/images/esdras.jpeg'; 
import Fabi from '../../assets/images/fabi.jpeg'; 
import Naty from '../../assets/images/naty.jpeg'; 
import { Entypo } from '@expo/vector-icons';

export default function Home(props) {
  const { navigation } = props;
  return(
    <ScrollView>
      <View style={styles.container}>

        <TouchableOpacity style={styles.btnIco} title="Open drawer" onPress={() => navigation.openDrawer()} >  
          <Entypo name="menu" size={30} color="black" />
        </TouchableOpacity>

        <Image source={Logo} style={styles.logo} />

        <Text style={styles.title}>Nós somos a SinalCode!</Text>
        <Text style={styles.paragraph}>Uma plataforma de cursos de programação 100% gratuito para surdos. Todas as aulas contam com a tradução simultânea com língua de sinais (libras) e legenda, para um melhor aproveitamento na aprendizagem.</Text>

        <Text style={styles.title}>Quem somos!</Text>

        <Text style={styles.paragraph}>A equipe SinalCode é composta por alunos do curso de programação Full Stack da Recode Pro, que tiveram como desafio proposto pela Recode Pro, produzir um projeto que promovesse a inserção de pessoas em situação de vulnerabilidade social no mercado de trabalho. A partir dessa inspiração, nasceu o projeto apaixonante SinalCode.</Text>

        <Text style={styles.title}>Os membros</Text>

        <Image source={Alan} style={styles.foto} />
        <Text style={styles.paragraph}>Alan Diego</Text>

        <Image source={Ari} style={styles.foto} /> 
        <Text style={styles.paragraph}>Ariane Gariso</Text>

        <Image source={Esdras} style={styles.foto} /> 
        <Text style={styles.paragraph}>Esdras Teixeira</Text>
        
        <Image source={Fabi} style={styles.foto} /> 
        <Text style={styles.paragraph}>Fabiana Macedo</Text>
        
        <Image source={Naty} style={styles.foto} />
        <Text style={styles.paragraph}>Nataly Flores</Text> 

        <View style={styles.footer}>
          <Text>&copy;Copyright - Todos os direitos reservados.</Text>
          <Text>Desenvolvido por Squad 2 SP-T2 Recode Pro 2021.</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: '#00c1ca', 
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnIco: {
    alignSelf: 'flex-start',
    borderRadius: 5,
    marginTop: 30,
    marginLeft: 20,
  },

  logo : {
    width: 300,
    height: 150,
  },

  foto: {
    marginTop: 40,
    width: 150,
    height: 150,
    borderRadius: 100,
  },

  input: {
    marginTop: 10,
    padding: 10,
    width: 300,
    backgroundColor: '#fff',
    fontSize: 15,
    borderRadius:10
  },

  title: {
    color: '#fe6e15',
    fontSize: 18,
    marginTop: 20,
    fontWeight: '900',
    shadowColor: '#fe6e15',
  },

  paragraph: {
    color: '#666666',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'justify',
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
  },

  footer: {
    marginTop: 40,
    fontWeight: '500',
    alignItems: 'center',
  },

});

