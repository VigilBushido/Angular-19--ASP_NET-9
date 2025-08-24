export interface ActorDTO {
    id: number;
    name: string;
    dataOfBirth: Date;
    picture?: string;
}

export interface ActorCreationDTO {
    name: string;
    dateOfBirth: Date;
    picutre?: File;
}