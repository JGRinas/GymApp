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
import { useCreateAccount } from "../../src/modules/auth/infrastructure/hooks/useAuth";

const fields = [
  { name: "name", placeholder: "NOMBRE" },
  { name: "last_name", placeholder: "APELLIDO" },
  { name: "email", placeholder: "CORREO ELECTRÓNICO" },
  { name: "password", placeholder: "CONTRASEÑA", type: "password" },
  {
    name: "passwordConfirmation",
    placeholder: "CONFIRMAR CONTRASEÑA",
    type: "password",
  },
];

const Register = () => {
  const methods = useForm<SignUp>({
    resolver: zodResolver(signUpSchema),
    mode: "onSubmit",
    reValidateMode: "onBlur",
  });

  const { signUp } = useCreateAccount();

  const onSubmit = methods.handleSubmit(async (data) => await signUp(data));

  return (
    <BackgroundImage>
      <View style={styles.container}>
        <View style={styles.authContainer}>
          <Logo2Icon width={200} height={200} />
          <FormProvider {...methods}>
            <InputContainer variant="secondary">
              {fields.map((item) => (
                <Controller
                  key={item.name}
                  name={item.name}
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
              <Button
                text="REGISTRARSE"
                handlePress={onSubmit}
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
