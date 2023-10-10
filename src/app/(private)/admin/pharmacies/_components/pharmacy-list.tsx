"use client";

import { use } from "react";

import Link from "next/link";

import { Pharmacy } from "@/core/domain";
import { Tbody, Table, Tr, Th, Td } from "@/shared/components/table/elements";
import { SimpleTable } from "@/shared/components/table/simple-table";

type PropsType = {
  pharmaciesPromise: Promise<Pharmacy[]>;
};

export default function PharmacyList({ pharmaciesPromise }: PropsType) {
  const pharmacies = use(pharmaciesPromise);

  return (
    <SimpleTable>
      <SimpleTable.Header title="Pharmacies">
        <input className="input" placeholder="Recherche..." />
        <Link
          href="/admin/pharmacies/add-pharmacy"
          className="btn btn-primary w-28"
        >
          Ajouter
        </Link>
      </SimpleTable.Header>

      <hr />

      <SimpleTable.Body>
        <Table>
          <Tbody>
            <Tr>
              <Th>N°</Th>
              <Th>Nom</Th>
              <Th>Localisation</Th>
              <Th>Actions</Th>
            </Tr>

            {pharmacies.map((pharmacy, index) => (
              <Tr key={pharmacy.id}>
                <Td>{index + 1}</Td>
                <Td>{pharmacy.name}</Td>
                <Td>{pharmacy.location}</Td>
                <Td>
                  <button className="btn btn-link text-gray-500">
                    Détails
                  </button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </SimpleTable.Body>
    </SimpleTable>
  );
}
