import React from "react";
import Input from "../../components/Inputs";
import PageHeader from "../../components/PageHeader";
import Textarea from "../../components/Textarea";

import warningIcon from "../../assets/images/icons/warning.svg";

import * as S from "./styles";
import Select from "../../components/Select";

const TeacherList: React.FC = () => {
  return (
    <S.Container>
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
      >
        <S.Main>
          <S.Fieldset>
            <S.Legend>Seus dados</S.Legend>
            <Input name="name" label="Nome Completo" />
            <Input name="avatar" label="Avatar" />
            <Input name="whatsapp" label="WhatsApp" />
            <Textarea name="bio" label="Biografia" />
          </S.Fieldset>

          <S.Fieldset>
            <S.Legend>Sobre a aula</S.Legend>
            <Select
              name="subject"
              label="Matéria"
              options={[
                { value: "Artes", label: "Artes" },
                { value: "Biologia", label: "Biologia" },
                { value: "Ciências", label: "Ciências" },
                { value: "Educação Física", label: "Educação Física" },
                { value: "Física", label: "Física" },
                { value: "Geografia", label: "Geografia" },
                { value: "História", label: "História" },
                { value: "Matématica", label: "Matématica" },
                { value: "Português", label: "Português" },
                { value: "Química", label: "Química" },
              ]}
            />
            <Input name="cost " label="Custo da sua hora por aula" />
          </S.Fieldset>

          <S.Footer>
            <S.P>
              <S.ImgInfo src={warningIcon} />
              Importante! <br />
              Preencha todos os dados
            </S.P>
            <S.Button type="button">Salvar cadastro</S.Button>
          </S.Footer>
        </S.Main>
      </PageHeader>
    </S.Container>
  );
};

export default TeacherList;
