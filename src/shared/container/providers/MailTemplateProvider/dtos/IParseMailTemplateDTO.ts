interface ITemplateVariables {
  [key: string]: string | number;
}

export default interface IParsMailTemplateDTO {
  file: string;
  variables: ITemplateVariables;
}
