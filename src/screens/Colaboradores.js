import React from 'react';
import { StyleSheet, ScrollView, Text, View, Image } from 'react-native';
import Dayane from '../../assets/images/dayane.jpeg';
import Ana from '../../assets/images/ana.jpeg';


export default function Colaboradores() {
    return(
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.title}>Nossos Colaboradores</Text>
            <Text style={styles.paragraph}>Esta página dedicamos aos nossos colaboradores. Pessoas que acreditam no projeto SinalCode e junto com o resto da equipe trabalham para oferecer o que há de melhor para nossos usuários.</Text>

            <Text style={styles.title}>Nossas Voluntárias</Text>

            <Image source={Dayane} style={styles.foto} /> 
            <Text style={styles.title}>Dayane Karoline Rodrigues</Text>
            <Text style={styles.paragraph}>Graduada em Fonoaudiologia com aprimoramento em linguagem, possui conhecimento em libras através de cursos e contato com a comunidade Surda e intérpretes.</Text>

            <Image source={Ana} style={styles.foto} /> 
            <Text style={styles.title}>Ana Paula Koszt</Text>
            <Text style={styles.paragraph}>Graduada em Pedagogia e Pós graduada em educação especial, é professora de libras na escola PRONATEC SP, voluntária no centro de educação para Surdos em Rio Branco e agente de inclusão escolar no município de Barueri.</Text>
        
    


        <View style={styles.footer}>
          <Text>&copy;Copyright - Todos os direitos reservados.</Text>
          <Text>Desenvolvido por Squad 2 SP-T2 Recode Pro 2021.</Text>
        </View>
        </View>
        </ScrollView>
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
    width: 150,
    height: 150,
    borderRadius: 100,
  },

  footer: {
    marginTop: 40,
    fontWeight: '500',
    alignItems: 'center',
    color: '#666666',
  },

});

