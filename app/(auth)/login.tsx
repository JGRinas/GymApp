import React from "react";
import { StyleSheet, View } from "react-native";

import { Logo2Icon } from "@assets/icons";
import BackgroundImage from "@shared/ui/BackgroundImage";
import { Banner } from "@shared/ui/Banner";
import { Button } from "@shared/ui/Button";
import { Input } from "@shared/ui/Input";
import { InputContainer } from "@shared/ui/InputContainer";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { SignIn } from "../../src/modules/auth/domain";
import { signInSchema } from "../../src/modules/auth/domain/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLogin } from "../../src/modules/auth/infrastructure/hooks/useAuth";

const fields = [
  { name: "email", placeholder: "CORREO ELECTRÓNICO" },
  { name: "password", placeholder: "CONTRASEÑA", type: "password" },
];

const Login = () => {
  const methods = useForm<SignIn>({
    resolver: zodResolver(signInSchema),
    mode: "onSubmit",
    reValidateMode: "onBlur",
  });

  const { mutateAsync: signIn } = useLogin();

  const onSubmit = methods.handleSubmit(async (data) => await signIn(data));

  return (
    <BackgroundImage>
      <View style={styles.container}>
        <View style={styles.authContainer}>
          <Logo2Icon width={200} height={200} />
          <FormProvider {...methods}>
            <InputContainer variant="secondary">
              {fields.map((item) => (
                <Controller
                  name={item.name}
                  key={item.name}
                  render={({ field, fieldState: { error } }) => (
                    <Input
                      placeholder={item.placeholder}
                      onChangeText={field.onChange}
                      value={field.value}
                      error={!!error}
                      errorMessage={error?.message ?? ""}
                      secureField={item.type === "password"}
                    />
                  )}
                />
              ))}
              <Button text="INICIAR SESIÓN" handlePress={onSubmit} />
            </InputContainer>
          </FormProvider>
        </View>
        <Banner text="TU GIMNASIO AL ALCANCE DE TUS MANOS." />
      </View>
    </BackgroundImage>
  );
};

const styles = StyleSheet.create({
  authContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "space-evenly",
  },
});

export default Login;
