import React from 'react';
import { StyleSheet, ScrollView, Text, View, Image } from 'react-native';
import Dayane from '../../assets/images/dayane.jpeg';
import Ana from '../../assets/images/ana.jpeg';
import Curso from '../../assets/images/curso.jpg';


export default function Cursos() {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Nossos Cursos</Text>
            <Text style={styles.paragraph}>Na página de cursos, você nosso amigo surdo irá contar com uma plataforma totalmente adaptada para que você possa ter a melhor experiência e comodidade no seu aprendizado</Text>

            <Text style={styles.title}>Iniciando com HTML5 e CSS3</Text>
            <Text style={styles.paragraph}>Curso para iniciantes que desejam aprender a criar sites utilizando as tecnologias de HTML5 + CSS3 </Text>
            <Image source={Curso} style={styles.foto} /> 

        <View style={styles.footer}>
          <Text>&copy;Copyright - Todos os direitos reservados.</Text>
          <Text>Desenvolvido por Squad 2 SP-T2 Recode Pro 2021.</Text>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: '#00c1ca', 
    alignItems: 'center',
    justifyContent: 'center',
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

  foto: {
    marginTop: 40,
    width: 300,
    height: 180,
  },

  footer: {
    marginTop: 40,
    fontWeight: '500',
    alignItems: 'center',
    color: '#666666',
  },

});