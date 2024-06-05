import { Box, ProfileAvatar, ScreenComponent, Text } from '@Components';
import { userUserGetById } from '@domain';
import React from 'react';
import { ActivityIndicator } from 'react-native';


import { AppScreenProps } from 'src/routes/navigationTypes';


export function ProfileScreen({route}: AppScreenProps<'ProfileScreen'>) {
  const userId = route.params.userId;

  const {loading, error, user} = userUserGetById(userId);

  return (
    <ScreenComponent changeGoBack>
      {loading && <ActivityIndicator />}
      {error && <Text> error ao carregar perfil do usuário</Text>}
      {user && (
        <Box alignItems="center">
          <ProfileAvatar
            proFileUrl={user.profileUrl}
            width={64}
            height={64}
            borderRadius={24}
          />
          <Text preset="headingMedium" bold>
            {user.fullName}
          </Text>
          <Text>@{user.username}</Text>
        </Box>
      )}
    </ScreenComponent>
  );
}

function useUserGetById(userId: any): { loading: any; error: any; user: any; } {
    throw new Error('Function not implemented.');
} 
