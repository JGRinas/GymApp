import { Logo2Icon } from "@assets/icons";
import BackgroundImage from "@shared/ui/BackgroundImage";
import { Banner } from "@shared/ui/Banner";
import { Button } from "@shared/ui/Button";
import { Input } from "@shared/ui/Input";
import { InputContainer } from "@shared/ui/InputContainer";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { SignUp } from "../../src/modules/auth/domain";
import { signUpSchema } from "../../src/modules/auth/domain/schemas";
import { zodResolver } from "@hookform/resolvers/zod";

const fields = [
  { name: "firstname", placeholder: "NOMBRE" },
  { name: "lastname", placeholder: "APELLIDO" },
  { name: "email", placeholder: "CORREO ELECTRÓNICO" },
  { name: "password", placeholder: "CONTRASEÑA" },
  { name: "passwordConfirmation", placeholder: "CONFIRMAR CONTRASEÑA" },
];

const Register = () => {
  const methods = useForm<SignUp>({
    resolver: zodResolver(signUpSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });
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
                    />
                  )}
                />
              ))}
              <Button
                text="REGISTRARSE"
                handlePress={() => methods.handleSubmit(() => {})}
                variant="secondary"
              />
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

export default Register;
