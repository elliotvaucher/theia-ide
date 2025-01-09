/* eslint-disable @typescript-eslint/tslint/config */
/* eslint-disable no-trailing-spaces */
/********************************************************************************
 * Copyright (C) 2020 EclipseSource and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/

import { WindowService } from '@theia/core/lib/browser/window/window-service';
import * as React from 'react';

export interface ExternalBrowserLinkProps {
    text: string;
    url: string;
    windowService: WindowService;
}

function BrowserLink(props: ExternalBrowserLinkProps): JSX.Element {
    return <a
        role={'button'}
        tabIndex={0}
        href={props.url}
        target='_blank'
        >
        {props.text}
    </a>;
}

export function renderWhatIs(windowService: WindowService): React.ReactNode {
    return <div className='gs-section'>
        <h3 className='gs-section-header'>
            Qu'est-ce que Privadata ?
        </h3>
        <div>
            Privadata est une solution innovante d'intelligence artificielle conçue spécifiquement pour les professionnels du droit. 
            Notre plateforme utilise des technologies de pointe pour simplifier et automatiser les tâches juridiques complexes.
        </div>
        <div>
            Disponible en tant que <BrowserLink text="solution cloud sécurisée" url="https://privadata.fr/cloud" 
            windowService={windowService} ></BrowserLink>, Privadata peut également être déployée sur site pour répondre aux exigences 
            de confidentialité les plus strictes.
        </div>
    </div>;
}

export function renderExtendingCustomizing(windowService: WindowService): React.ReactNode {
    return <div className='gs-section'>
        <h3 className='gs-section-header'>
            Fonctionnalités Principales
        </h3>
        <div>
            Privadata propose une suite complète d'outils d'IA, notamment l'analyse automatique de documents juridiques, 
            la génération de résumés, et l'extraction intelligente de données clés. Découvrez notre <BrowserLink 
            text="catalogue de fonctionnalités" url="https://privadata.fr/fonctionnalites" 
            windowService={windowService} ></BrowserLink>.
        </div>
        <div>
            Notre plateforme s'adapte à vos besoins spécifiques et peut être personnalisée pour différents domaines du droit : 
            contentieux, contrats, propriété intellectuelle, et plus encore.
        </div>
    </div>;
}

export function renderSupport(windowService: WindowService): React.ReactNode {
    return <div className='gs-section'>
        <h3 className='gs-section-header'>
            Support Professionnel
        </h3>
        <div>
            Notre équipe d'experts est disponible 24/7 pour vous accompagner. Consultez notre <BrowserLink 
            text="centre d'assistance" url="https://support.privadata.fr" 
            windowService={windowService} ></BrowserLink> ou contactez directement notre service client.
        </div>
    </div>;
}

export function renderTickets(windowService: WindowService): React.ReactNode {
    return <div className='gs-section'>
        <h3 className='gs-section-header'>
            Signalement et Suggestions
        </h3>
        <div>
            Votre retour est essentiel pour l'amélioration continue de Privadata. Pour signaler un problème ou 
            suggérer une amélioration, utilisez notre <BrowserLink text="portail de feedback" 
            url="https://privadata.fr/feedback" windowService={windowService} ></BrowserLink>.
        </div>
    </div>;
}

export function renderSourceCode(windowService: WindowService): React.ReactNode {
    return <div className='gs-section'>
        <h3 className='gs-section-header'>
            Sécurité et Conformité
        </h3>
        <div>
            Privadata respecte les plus hauts standards de sécurité et de protection des données. En savoir plus sur 
            nos <BrowserLink text="certifications et conformités" url="https://privadata.fr/securite" 
            windowService={windowService} ></BrowserLink>.
        </div>
    </div>;
}

export function renderDocumentation(windowService: WindowService): React.ReactNode {
    return <div className='gs-section'>
        <h3 className='gs-section-header'>
            Documentation
        </h3>
        <div>
            Consultez notre <BrowserLink text="centre de documentation" url="https://docs.privadata.fr" 
            windowService={windowService} ></BrowserLink> pour des guides détaillés et des tutoriels.
        </div>
    </div>;
}

export function renderCollaboration(windowService: WindowService): React.ReactNode {
    return <div className='gs-section'>
        <h3 className='gs-section-header'>
            Collaboration
        </h3>
        <div>
            Travaillez efficacement en équipe grâce à nos fonctionnalités de collaboration en temps réel. 
            Partagez des documents, commentez et collaborez directement dans l'interface. Découvrez 
            nos <BrowserLink text="outils collaboratifs" url="https://privadata.fr/collaboration" 
            windowService={windowService} />.
        </div>
    </div>;
}

export function renderDownloads(): React.ReactNode {
    return <div className='gs-section'>
        <h3 className='gs-section-header'>
            Mises à Jour
        </h3>
        <div className='gs-action-container'>
            Privadata se met à jour automatiquement pour vous garantir l'accès aux dernières fonctionnalités 
            et améliorations de sécurité. Vous pouvez vérifier les mises à jour dans 
            Fichier {'>'} Préférences {'>'} Rechercher des mises à jour.
        </div>
    </div>;
}
