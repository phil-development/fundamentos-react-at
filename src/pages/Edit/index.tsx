import { useEditForm } from './useEditForm'; // Importe o hook customizado
import { Container, Content, Row, Field, Button } from "./styles";

export default function Edit() {

    const {
        handleSubmit,
        register,
        errors,
        ufs,
        cities,
        handleCurrentUf,
        hotel,
        handleEditHotel
    } = useEditForm();

    return (
        <Container>

            <Content onSubmit={handleSubmit(handleEditHotel)}>
                <Field>
                    <span>Nome do Hotel</span>
                    <input
                        placeholder="Insira o nome do hotel"
                        {...register("name")}
                        type="text"
                        defaultValue={hotel?.name}
                    />
                    {errors.name?.message && <p>{errors.name?.message}</p>}
                </Field>

                <Row>
                    <Field>
                        <span>Classificação</span>
                        <input
                            placeholder="Insira a classificação"
                            {...register("rating", { valueAsNumber: true })}
                            defaultValue={hotel?.rating}
                        />
                        {errors.rating?.message && <p>{errors.rating?.message}</p>}
                    </Field>

                    <Field>
                        <span>Preço da Diária</span>
                        <input
                            placeholder="Insira o valor da diária"
                            {...register("price", { valueAsNumber: true })}
                            type="number"
                            defaultValue={hotel?.price}
                        />
                        {errors.price?.message && <p>{errors.price?.message}</p>}
                    </Field>
                </Row>

                <Field>
                    <span>Descrição do Hotel</span>
                    <textarea
                        placeholder="Insira a descrição do hotel"
                        {...register("description")}
                        defaultValue={hotel?.description}
                    />
                    {errors.description?.message && <p>{errors.description?.message}</p>}
                </Field>

                <Field>
                    <span>Descrição dos Serviços</span>
                    <textarea
                        placeholder="Insira a descrição dos serviços do hotel"
                        {...register("descriptionServices")}
                        defaultValue={hotel?.descriptionServices}
                    />
                    {errors.descriptionServices?.message && (
                        <p>{errors.descriptionServices?.message}</p>
                    )}
                </Field>

                <Row>
                    <Field>
                        <span>Estado</span>

                        <select
                            {...register("uf")}
                            onChange={handleCurrentUf}
                            defaultValue={hotel?.uf}
                        >
                            <option value="0">Selecione um estado</option>
                            {ufs.map((uf) => (
                                <option key={uf.id} value={uf.sigla}>
                                    {uf.nome}
                                </option>
                            ))}
                        </select>
                        {errors.uf?.message && <p>{errors.uf?.message}</p>}
                    </Field>

                    <Field>
                        <span>Cidade</span>
                        <select {...register("city")} defaultValue={hotel?.city}>
                            <option value="0">Selecione uma cidade</option>
                            {cities.map((city) => (
                                <option key={city.id} value={city.nome}>
                                    {city.nome}
                                </option>
                            ))}
                        </select>

                        {errors.city?.message && <p>{errors.city?.message}</p>}
                    </Field>
                </Row>

                <Field>
                    <span>Imagem do Hotel</span>
                    <input
                        {...register("hotelImage")}
                        type="file"
                    />
                    {errors.hotelImage?.message && <p>{errors.hotelImage?.message}</p>}
                </Field>

                <Button type="submit">Salvar alterações</Button>

            </Content>

        </Container>
    );
};
