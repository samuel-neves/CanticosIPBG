import React, { useState, useCallback } from 'react';
import { ScrollView, Keyboard } from 'react-native';

import Input from '../../components/Input';

import {
  Container,
  SearchBox,
  MusicContainer,
  Title,
  Lyrics,
  Music,
} from './styles';

interface MusicProps {
  title: string;
  lyrics: string;
}

const Search: React.FC = () => {
  const musicTest = {
    title: '1. Teste de título',
    lyrics: 'Lorem ipsum dolor sit amet, cectsetur adip',
  };

  const musicTest2 = {
    title: '2. Teste de título',
    lyrics: 'Lorem ipsum dolor sit amet, cectsetur adip',
  };

  const [musics, setMusics] = useState<MusicProps[]>([musicTest]);

  const handleChosenMusic = useCallback(() => {
    console.log('Musica que tu escolheu');
    Keyboard.dismiss;
  }, []);

  return (
    <Container>
      <SearchBox>
        <Input placeholder="Número, título ou letra" selectionColor="#ddd" />
      </SearchBox>

      <ScrollView
        keyboardShouldPersistTaps="handled"
        onScrollBeginDrag={Keyboard.dismiss}
      >
        <MusicContainer onPress={handleChosenMusic}>
          <Music>
            <Title>1. Teste de título</Title>

            <Lyrics>
              {musics.map(music => {
                return music.lyrics.length > 37
                  ? music.lyrics.substring(0, 37 - 3) + '...'
                  : music.lyrics;
              })}
            </Lyrics>
          </Music>
        </MusicContainer>
      </ScrollView>
    </Container>
  );
};

export default Search;
